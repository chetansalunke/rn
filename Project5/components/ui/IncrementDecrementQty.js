import React from 'react';
import {View, StyleSheet} from 'react-native';

const IncrementDecrementQty = () => {

    
    return (
        <View>
            <Text style={styles.productPrice}>₹{product.price}</Text>
            <TouchableOpacity
              style={{
                height: 27,
                borderRadius: 10,
                backgroundColor: "#34a9db",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 10,
              }}
              onPress={decrementButtonHandler}
            >
              <Text style={{ color: "#fff" }}>-</Text>
            </TouchableOpacity>
            <Text style={{ marginLeft: 10, fontSize: 16, fontWeight: "600" }}>
              {qty}
            </Text>
            <TouchableOpacity
              style={{
                height: 27,
                borderRadius: 10,
                backgroundColor: "#34a9db",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: 10,
                paddingRight: 10,
                marginLeft: 10,
              }}
              onPress={adddButtonHandler}
            >
              <Text style={{ color: "#fff" }}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({})

export default IncrementDecrementQty;
