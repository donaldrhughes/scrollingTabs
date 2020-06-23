import React, { Component } from 'react';
import { Content, Grid, Row, Col, Body, Left, Right, Text, Thumbnail, ListItem, Button, Title } from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

//Components

export default class ListyItem extends Component {

    render() {
        let { icon, uri, header, body, members, followers, thanks } = this.props;

        return (
            <ListItem avatar>
                <Grid>
                    <Row style={{ marginTop: '2%' }}>
                        <Col style={{ width: '15%' }}><Thumbnail style={styles.dropShadow} source={{ uri: uri }} /></Col>
                        <Col style={{ width: '60%' }}>
                            <Body>
                                <Text style={{ fontWeight: 'bold', marginBottom: '2%' }}>{header}<Icon name={icon} size={30} color='blue' /></Text>
                                <Text style={{ color: 'grey', marginBottom: '2%' }}>{body}</Text>
                                <Row>
                                    <Col><Text style={styles.memtofo}>{members}</Text></Col>
                                    <Col><Text style={styles.memtofo}>{thanks}</Text></Col>
                                    <Col><Text style={styles.memtofo}>{followers}</Text></Col>
                                </Row>
                            </Body>
                        </Col>
                        <Col style={{ width: '25%', marginTop: '10%' }}><Button rounded danger><Text style={{ color: 'white' }}>Following</Text></Button></Col>
                    </Row>
                </Grid>
            </ListItem>
        )
    }
};


const styles = StyleSheet.create({
    dropShadow: {
        shadowColor: '#E91E63',
        shadowOffset: { width: 1, height: 4 },
        shadowRadius: 5
    },
    memtofo: {
        fontSize: 9,
        color: 'grey',
        fontWeight: 'bold'
    }
});


{/* <Text
                                    style={{
                                        color: "white",
                                        textShadowColor: 'black',
                                        textShadowOffset: { width: -1, height: 0 },
                                        textShadowRadius: 10,
                                        // fontSize: hp('2%'),
                                        fontWeight: '800'
                                    }}>Online Sports Store to Buy Sports Goods</Text> */}