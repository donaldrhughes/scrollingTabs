import React, { Component } from 'react';
import { Content, List, Icon, View } from 'native-base';
import { StyleSheet } from 'react-native';

//Components
import ListyItem from '../../Components/ListyItem'

export default class Listy extends Component {

    render() {
        let following = [
            { uri: 'https://i.picsum.photos/id/900/200/300.jpg?hmac=_xi51c2dVkaF_l3I_H4M3nOl9u4_0rsxUoFUfOSGOCk', header: "Entrepreneur ", body: `A group of builders talking about what they've built already and what's still ahead`, members: '8 Members', thanks: "2M Thanks", followers: '7k followers', img: 'http://lorempixel.com/output/technics-q-c-200-200-4.jpg', icon: 'anchor' },
            { uri: 'https://i.picsum.photos/id/730/200/200.jpg?hmac=wK_2ZX79XZRP1wVJ-dW_r-OkOjiz1kK8eHIyTw2Lr6s', header: "Oprah's Book Club ", body: `Highlighting books chosen by Oprah Winfrey, since 1996`, members: '6 Members', thanks: "3M Thanks", followers: '11k followers' },
            { uri: 'https://i.picsum.photos/id/524/200/300.jpg?hmac=_0B_jkz8dRd5eIQz0xIlicLaZZnzpRdAH72crtCVvOU', header: "Sports 24/7 ", body: `The leading group of sports experts covering everything you love from football to boxing`, members: '15 Members', thanks: "4M Thanks", followers: '2k followers' },
            { uri: 'https://i.picsum.photos/id/705/200/300.jpg?hmac=pGByXwn1zuSUt1HtTv0qSR9KZYBBsB9tiYRJAzj_140', header: "Women's fitness tips ", body: `Fitness professionals who will show YOU how to get that rockin' BOD you've been waiting for!`, members: '1 Members', thanks: "5M Thanks", followers: '3k followers' },
            { uri: 'https://i.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM', header: "Donald Hughes ", body: `@heypmiller Husband. Father. Product creator Stanford + BYU`, members: '25 Members', thanks: "7M Thanks", followers: '11k followers' },
            { uri: 'https://i.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM', header: "Bill Smith ", body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`, members: '33 Members', thanks: "10M Thanks", followers: '22k followers' },
            { uri: 'https://i.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM', header: "James Halliday ", body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`, members: '44 Members', thanks: "9M Thanks", followers: '55k followers' },
            { uri: 'https://i.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM', header: "Dante Aligheri ", body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`, members: '15 Members', thanks: "3M Thanks", followers: '9k followers' },
            { uri: 'https://i.picsum.photos/id/719/200/300.jpg?hmac=ROd_JjwPBNsmDhuN2yXu9bdtg0T4Nyl1iYA0WDXYpxM', header: "Ethel Birch ", body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do`, members: '50 Members', thanks: "1M Thanks", followers: '4k followers' }
        ]

        return (
            <>
                <Content scrollEnabled={true}>
                    <List>
                        {following.map((i) => {
                            return <ListyItem icon={i.icon} key={i} uri={i.uri} header={i.header} body={i.body} thanks={i.thanks} followers={i.followers} members={i.members} ios={i.ios} />
                        })}
                    </List>
                </Content>
            </>
        );
    }
}


const styles = StyleSheet.create({
    dropShadow: {
        shadowColor: '#E91E63',
        shadowOffset: { width: 1, height: 4 },
        shadowRadius: 5
    }
});