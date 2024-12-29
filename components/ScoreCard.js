import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Medal from "./Medal";

export default function ScoreCard({username, score, rank}){
    return <TouchableOpacity>
        <View style={style.card}>
            <Text style={style.text}>
                {username}
            </Text>
            <Text style={style.text}>
                {score}
            </Text>
            <View style = {style.medal}>
                {
                    rank <= 3? <Medal rank={rank} /> : <View>
                        
                        <Text style={[style.text, {marginHorizontal : 25}]}>
                            
                            {rank}
                </Text>
                    </View>

                }
            
            </View>
            
        </View>
    </TouchableOpacity>
}

const style = StyleSheet.create({
    card : {
        backgroundColor: 'white',
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        shadowColor : "gray",
        shadowRadius: 10,
        shadowOffset: "0 0 0.3 0.4",
        margin: 2,
        


    },
    text: {
        color: '#000',        
        alignSelf: "center"
    },
    medal : {
        flexDirection: "row",
    }
})