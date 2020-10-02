import React, { Component } from 'react';
import { Dimensions, Modal, Share } from 'react-native';
import {WebView} from 'react-native-webview';
import {Container, Header, Content, Body, Left, Icon, Right, Title, Button} from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        return this.props.onClose();
    }

    
    render() {
        const { showModal, articleData } = this.props;
        const { url } = articleData;
        if( url != undefined ) {
        return (
            <Modal
                animationType="slide"
                transparent
                visible={showModal}
                onRequestClose={this.handleClose}
            >
                <Container style={{margin:15, marginBottom:0, backgroundColor:'black'}}>
                    <Header style={{backgroundColor:'white'}}>
                        <Left>
                            <Button onPress={this.handleClose} transparent>
                                <Icon name="close" style={{color: 'green', fontSize: 20}}/>
                            </Button>
                        </Left>
                        <Body>
                            <Title children={articleData.title} style={{color: 'white'}}/>
                        </Body>
                        
                    </Header>
                    <Content contentContainerStyle={{height: webViewHeight}}>
                        <WebView source={{uri:url}} style={{flex: 1}}
                        onError={this.handleClose} startInLoadingState
                        scalesPageToFit
                        />
                    </Content>
                </Container>
            </Modal>
        );
        } else {
            return null;
        }
    }
}

//make this component available to the app
export default ModalComponent;
