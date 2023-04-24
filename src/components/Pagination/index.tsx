import React from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './style';
import {icArrowLeft} from '../../assets/img';
import OxaniumText from '../OxaniumText';

type Props = {
  page: number;
  onPageChange: (pageCurrent: number) => void;
  totalPages: number;
};

const Pagination: React.FC<Props> = ({onPageChange, page, totalPages}) => {
  const [currentPage, setCurrentPage] = React.useState(page || 1);

  React.useEffect(() => {
    if (page > 0) {
      setCurrentPage(page);
    }
  }, [page]);
  return (
    <View style={[styles.root, styles.flexCenter]}>
      <TouchableOpacity style={[styles.btn, styles.flexCenter]}>
        <Image source={icArrowLeft} />
      </TouchableOpacity>
      <View style={[styles.flexCenter, styles.content]}>
        <TextInput
          keyboardType="numeric"
          value={currentPage.toString()}
          style={styles.input}
          onChangeText={text => {
            const number = parseInt(text, 10) || 0;
            // input only accept positive number
            if (number >= totalPages) {
              setCurrentPage(totalPages);
              return;
            }
            setCurrentPage(Math.abs(number));
          }}
          onSubmitEditing={() => onPageChange(currentPage)}
        />
        <OxaniumText style={styles.totalPage}>of {totalPages}</OxaniumText>
      </View>
      <TouchableOpacity
        style={[styles.btn, styles.flexCenter, styles.icArrowRight]}>
        <Image source={icArrowLeft} />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;
