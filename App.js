import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Lista from "./src/Lista";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        {
          id: "1",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/98078686_2167203766738056_7460791267881334381_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=FbApEm3Gc1QAX-wBiR8&oh=4776c31aa02be740eb7e87ba3263f1f9&oe=5EF0B012",
          likeada: false,
          likers: 12,
        },
        {
          id: "2",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/95399612_224837358952506_6719309013474222781_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=z7B3rtq0cuYAX_kFk1m&oh=60f70e5f1b656966341b75e6734a8952&oe=5EF1F0C2",
          likeada: false,
          likers: 323,
        },
        {
          id: "3",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/94606356_254984985892186_4075117928965904055_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=KOeqiFJfejEAX8XM8eu&oh=ca8b3829eeb9ad959cbc8a0d7667e583&oe=5EEECE0B",
          likeada: false,
          likers: 74,
        },
        {
          id: "4",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/92011380_182271046565943_2611742530065353983_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=6ZUZ5bB_JvsAX9otj6b&oh=1d99755eb46ba8e55751beaa082df692&oe=5EF0DCDC",
          likeada: false,
          likers: 2,
        },
        {
          id: "5",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.90.720.720a/s640x640/91846565_159664058852105_842068222283353994_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=IgSSDhjKTvAAX99D9uc&oh=e62fe4216d75c726a28ca5906a68393c&oe=5EC9A95E",
          likeada: false,
          likers: 0,
        },
        {
          id: "6",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/91234103_246724479783654_3789706688663512045_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=6lHu1KZKgLYAX9rmxVR&oh=8b282811665a85236c5f02caa9574318&oe=5EEF2B98",
          likeada: false,
          likers: 7543,
        },
        {
          id: "7",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/90094161_143519120533057_1670587156111715116_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=kDjDlipPpa0AX9IrmdD&oh=0f46ffa887fff1d28a4f334b683514f6&oe=5EEF3308",
          likeada: false,
          likers: 1,
        },
        {
          id: "8",
          nome: "Ian_Marcony",
          descricao: "Miau!!!!",
          imgPerfil:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/93158085_227802881901752_947279750374621184_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_ohc=gNPlD8OPmm4AX9vxlcV&oh=89c011c0392eaa7057fd3334b4b59dd7&oe=5EEF5353",
          imgPubli:
            "https://instagram.fmao1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/89864369_2547881408817277_112859278183862756_n.jpg?_nc_ht=instagram.fmao1-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=uXWBqtU9HvgAX__dFIE&oh=33f36a0df205f3838dc803a229acebbf&oe=5EF10DA7",
          likeada: false,
          likers: 33,
        },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Image
              source={require("./src/img/txtLogoIG.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require("./src/img/send.png")} style={styles.send} />
          </TouchableOpacity>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={this.state.feed}
          renderItem={({ item }) => <Lista data={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: Constants.statusBarHeight,
  },
  header: {
    flexDirection: "row",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 7,
    borderBottomWidth: 0.2,
    shadowColor: "#000",
    elevation: 1,
  },
  logo: {
    width: 116,
    height: 43,
  },
  send: {
    width: 43,
    height: 43,
  },
});

export default App;
