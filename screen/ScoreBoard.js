import { View, Text, StyleSheet } from "react-native";
import ScoreCard from "../components/ScoreCard";

export default function ScoreBoard({}){
    return <View style = {style.container}>
        <ScoreCard username={"Username"} score={"Score"} rank={"Rank"} />
        <ScoreCard username={"Mihret"} score={100} rank={1} />
        <ScoreCard username={"Abebe"} score={90} rank={2} />
        <ScoreCard username={"Bekele"} score={56} rank={3} />
        <ScoreCard username={"Kebede"} score={22} rank={4} />
    </View>
}


const style = StyleSheet.create({
    container : {
        flex : 1,
        padding : 10
    }
})