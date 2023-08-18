import React from "react";
import { Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ coin }) => {
  const {
    image,
    name,
    symbol,
    current_price,
    market_cap,
    market_cap_rank,
    price_change_percentage_24h,
  } = coin;

  const normalizeMarketCap = (marketCap) => {
    if (marketCap >= 1_000_000_000_000) {
      return `${(marketCap / 1_000_000_000_000).toFixed(2)} T`;
    } else if (marketCap >= 1_000_000_000) {
      return `${(marketCap / 1_000_000_000).toFixed(2)} B`;
    } else if (marketCap >= 1_000_000) {
      return `${(marketCap / 1_000_000).toFixed(2)} M`;
    } else if (marketCap >= 1_000) {
      return `${(marketCap / 1_000).toFixed(2)} K`;
    } else {
      return marketCap.toFixed(2);
    }
  };

  const percentageColor = () => {
    if (price_change_percentage_24h < 0) {
      return "#ea3943";
    } else if (price_change_percentage_24h > 0) {
      return "#16c784";
    } else {
      return "white";
    }
  };

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{
          height: 30,
          width: 30,
          marginRight: 10,
          alignSelf: "center",
        }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.rank}>{market_cap_rank}</Text>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={16}
            color={percentageColor()}
            style={{ alignSelf: "center", marginRight: 5 }}
          />
          <Text style={[styles.text, { color: percentageColor() }]}>
            {price_change_percentage_24h.toFixed(2)} %
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: "auto", alignItems: "flex-end" }}>
        <Text style={styles.title}>{current_price}</Text>
        <Text style={{ color: "white" }}>
          MCap {normalizeMarketCap(market_cap)}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
