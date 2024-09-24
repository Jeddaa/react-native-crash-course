import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';

import { GestureResponderEvent } from 'react-native';

interface CustomBottonProps {
  title: string;
  handlePress: (event: GestureResponderEvent) => void;
  containerStyles: string;
  textStyles: string;
  isLoading: boolean;
}

const CustomBotton = ({
  title,
  handlePress,
  containerStyles,
  textStyles,
  isLoading
}: CustomBottonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}>
      <Text className="text-primary font-psemibold text-lg "> {title}</Text>
    </TouchableOpacity>
  );
};

export default CustomBotton;
