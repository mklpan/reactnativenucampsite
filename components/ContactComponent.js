import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends Component {

    static navigationOptions = {
        title: 'Contact'
    }

    render() {
        return (
            <ScrollView wrapperStyle={{ margin: 20 }}>
                <Card
                    title="Contact Information">
                    <Card>
                        <Text style={{ marginBottom: 10 }}>
                            1 Nucamp Way{"\n"}
                            Seattle, WA 98001{"\n"}
                            U.S.A.
                        </Text>
                        <Text>
                            Phone: 1-206-555-1234{"\n"}
                            Email: campsites@nucamp.co
                        </Text>
                    </Card>
                </Card>
            </ScrollView>
        );
    }
}

export default Contact;