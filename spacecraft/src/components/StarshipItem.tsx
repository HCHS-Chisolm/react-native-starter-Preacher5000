import React from "react";
import { View, Text, StyleSheet } from "react-natvie";

interface Starship {
    name: string;
    model: string;
    maufacture: string;
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

    const StarshipItem: React.FC<{ starship: Starship }> = ({ starship}) => {
        return (
            <View style={Styles.itemContainer}>
                <Text style={Styles.title}>{starship.name}</Text>
                <Text>{'Model: ${starship.model}'}</Text>
                <Text>{'Manufacturer: ${starship.manufacturer}'}</Text>
                <Text>{'Cos in Credits: ${starship.model}'}</Text>
            </View>

        )
    }
}