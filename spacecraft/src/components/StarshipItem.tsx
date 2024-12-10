import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Starship {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: String;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    hyperdrive_rating: string;
    MGLT: string;
    starship_class: string;
}

const StarshipItem: React.FC<{ starship: Starship }> = ({ starship}) => {
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.title}>{starship.name}</Text>
            <Text>{`Model: ${starship.model}`}</Text>
            <Text>{`Manufacturer: ${starship.manufacturer}`}</Text>
            <Text>{`Cos in Credits: ${starship.model}`}</Text>
            <Text>{`Length: ${starship.length}`}</Text>
            <Text>{`Crew: ${starship.crew}`}</Text>
            <Text>{`Passengers: ${starship.passengers}`}</Text>
            <Text>{`Consumables: ${starship.consumables}`}</Text>
            <Text>{`Hyperdrive Rating: ${starship.hyperdrive_rating}`}</Text>
            <Text>{`MGLT: ${starship.MGLT}`}</Text>
            <Text>{`Starship Class: ${starship.starship_class}`}</Text>
        </View>

    )
}

export default StarshipItem; 

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
});
