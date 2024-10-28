import {View, Text} from 'react-native';
import React from 'react';
import Design from './Design';
import {CardProp} from '../../screens/Home/Design';

interface ComponentProps {
  data: CardProp;
  index: number;
}

export default function Card({data, index}: ComponentProps) {
  const defaultProps = {
    data,
    index,
  };
  return <Design {...defaultProps} />;
}
