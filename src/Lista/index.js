import React, { Component } from "react";

import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

class Lista extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: this.props.data,
    };
    this.like = this.like.bind(this);
  }

  like() {
    let feed = this.state.feed;
    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1,
        },
      });
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers + 1,
        },
      });
    }
  }

  render() {
    return (
      <View style={styles.areaFeed}>
        <View style={styles.viewPerfil}>
          <Image
            source={{ uri: this.state.feed.imgPerfil }}
            style={styles.fotoPerfil}
          />
          <Text style={styles.nomeUser}>{this.state.feed.nome}</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.fotoPubl}
          source={{ uri: this.state.feed.imgPubli }}
        />
        <View style={styles.footerPubli}>
          <TouchableOpacity onPress={this.like}>
            <Image
              source={
                this.state.feed.likeada === false
                  ? require("../img/unlike.png")
                  : require("../img/likedIG.png")
              }
              style={styles.iconeLike}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../img/send.png")}
              style={styles.iconeSend}
            />
          </TouchableOpacity>
          <Text style={styles.likes}>
            {" "}
            Likes {this.state.feed.likers.toFixed(0)}
          </Text>
        </View>
        <View style={styles.viewRodape}>
          <Text style={styles.nomeRodape}>{this.state.feed.nome}</Text>
          <Text style={styles.descRodape}>{this.state.feed.descricao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  areaFeed: {},
  viewPerfil: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    padding: 8,
  },
  nomeUser: {
    fontSize: 22,
    textAlign: "left",
    color: "#000",
  },
  fotoPerfil: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  fotoPubl: {
    flex: 1,
    height: 400,
    alignItems: "center",
  },
  footerPubli: {
    flex: 1,
    flexDirection: "row",
    height: 65,
    padding: 5,
  },
  iconeLike: {
    width: 36,
    height: 34,
  },
  iconeSend: {
    width: 36,
    height: 34,
  },
  likes: {
    fontWeight: "bold",
    paddingLeft: 5,
    fontSize: 22,
    color: "#000",
  },
  viewRodape: {
    flexDirection: "row",
    alignItems: "center",
  },
  descRodape: {
    paddingLeft: 5,
    fontSize: 15,
    color: "#000",
  },
  nomeRodape: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    paddingLeft: 5,
  },
});

export default Lista;
