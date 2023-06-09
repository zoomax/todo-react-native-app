import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {format} from 'date-fns';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.header_Date}>
        <Text style={styles.day}>{format(new Date(), 'dd')}</Text>
        <View style={styles.date}>
          <Text style={styles.month}>{format(new Date(), 'MMM')}</Text>
          <Text style={styles.year}>{format(new Date(), 'yyyy')}</Text>
        </View>
      </View>
      <Text style={styles.header_day}>{format(new Date(), 'eeee')}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 100,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
  },
  header_Date: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_day: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },

  day: {
    fontSize: 60,
    fontWeight: '500',
    color: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  date: {
    paddingTop: 7,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 60,
  },
  year: {
    fontSize: 20,
    fontWeight: '300',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  month: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
