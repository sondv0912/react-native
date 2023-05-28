import React, {ComponentType} from 'react';
import {ActivityIndicator, View} from 'react-native';

interface WithLoadingProps {
  isLoading: boolean;
}

const withLoading = <P extends object>(WrappedComponent: ComponentType<P>) => {
  const WithLoading: React.FC<P & WithLoadingProps> = ({
    isLoading,
    ...props
  }) => {
    if (isLoading) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      );
    }

    return <WrappedComponent {...(props as P)} />;
  };

  return WithLoading;
};

export default withLoading;
