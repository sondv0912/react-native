import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from './style';
import Modal from 'react-native-modal';
import OxaniumText from '../../../../components/OxaniumText';
import {icClose} from '../../../../assets/img';
import {Formik, FieldArray} from 'formik';
import CheckBox from '@react-native-community/checkbox';
import {ReduxContext} from '../../../../components/ReduxProvider';
import {SkinItemType} from '../../../../models';
import {toImageUri} from '../../../../utils/utils';

type Props = {
  modalVisible: boolean;
  toggleModal: () => void;
};
const raritys = [
  {id: 0, value: 'Common'},
  {id: 1, value: 'Epic'},
  {id: 2, value: 'Legendary'},
];
const skinRarity = [
  {id: 0, value: 'Default'},
  {id: 1, value: 'Rare'},
  {id: 2, value: 'Mythic'},
];
const initialValues: {
  raritys: number[];
  skinRarity: number[];
  skins: SkinItemType[];
} = {
  raritys: [],
  skinRarity: [],
  skins: [],
};
const ModalFilter: React.FC<Props> = ({modalVisible, toggleModal}) => {
  const {state} = React.useContext(ReduxContext);
  const [showModalSelectSkin, setShowModalSelectSkin] = React.useState(false);
  const {configSkin} = state.buyTabState;
  return (
    <Modal
      isVisible={modalVisible}
      onBackdropPress={toggleModal}
      style={styles.modal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <OxaniumText style={styles.modalTitle}>Filter</OxaniumText>
          <TouchableOpacity onPress={toggleModal}>
            <Image source={icClose} style={styles.icClose} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.modalContent}>
          <Formik initialValues={initialValues} onSubmit={() => {}}>
            {({values}) => (
              <>
                <FieldArray name="raritys">
                  {({push, remove}) => (
                    <View style={styles.contentFilter}>
                      <OxaniumText style={styles.headingContentFilter}>
                        Rarity
                      </OxaniumText>
                      {raritys.map(rarity => (
                        <View style={styles.itemCheckBox} key={rarity.id}>
                          <CheckBox
                            value={values.raritys.includes(rarity.id)}
                            tintColors={{true: '#795CF5', false: '#795CF5'}}
                            onValueChange={checked => {
                              if (checked) {
                                push(rarity.id);
                              } else {
                                const index = values.raritys.indexOf(rarity.id);
                                remove(index);
                              }
                            }}
                          />
                          <OxaniumText style={styles.titleCheckbox}>
                            {rarity.value}
                          </OxaniumText>
                        </View>
                      ))}
                    </View>
                  )}
                </FieldArray>
                <FieldArray name="skinRarity">
                  {({push, remove}) => (
                    <View style={styles.contentFilter}>
                      <OxaniumText style={styles.headingContentFilter}>
                        Skin Rarity
                      </OxaniumText>
                      {skinRarity.map(rarity => (
                        <View style={styles.itemCheckBox} key={rarity.id}>
                          <CheckBox
                            value={values.skinRarity.includes(rarity.id)}
                            tintColors={{true: '#795CF5', false: '#795CF5'}}
                            onValueChange={checked => {
                              if (checked) {
                                push(rarity.id);
                              } else {
                                const index = values.skinRarity.indexOf(
                                  rarity.id,
                                );
                                remove(index);
                              }
                            }}
                          />
                          <OxaniumText style={styles.titleCheckbox}>
                            {rarity.value}
                          </OxaniumText>
                        </View>
                      ))}
                    </View>
                  )}
                </FieldArray>
                <FieldArray name="skins">
                  {({push, remove}) => (
                    <View style={styles.contentFilter}>
                      <OxaniumText style={styles.headingContentFilter}>
                        Hero
                      </OxaniumText>
                      <View>
                        {values.skins.length === 0 ? (
                          <OxaniumText style={styles.titleNoSelect}>
                            No skin selected
                          </OxaniumText>
                        ) : (
                          <View style={styles.contentReview}>
                            <View style={styles.listImageReview}>
                              {values.skins.map((item, index) => {
                                if (index < 4) {
                                  return (
                                    <Image
                                      style={styles.imageReview}
                                      source={{
                                        uri: toImageUri(item.imageSmallAvatar),
                                      }}
                                      key={item.id}
                                    />
                                  );
                                }
                              })}
                            </View>
                            {values.skins.length > 4 && (
                              <OxaniumText style={styles.nameImageCheck}>
                                + {values.skins.length - 4} heroes
                              </OxaniumText>
                            )}
                          </View>
                        )}
                      </View>
                      <TouchableOpacity
                        style={[styles.btn, styles.flexCenter]}
                        onPress={() => setShowModalSelectSkin(true)}>
                        <OxaniumText style={styles.titleBtn}>
                          Choose Skin
                        </OxaniumText>
                      </TouchableOpacity>
                      <Modal
                        isVisible={showModalSelectSkin}
                        onBackdropPress={() => setShowModalSelectSkin(false)}>
                        <View style={styles.modalContainer}>
                          <View style={styles.modalHeader}>
                            <OxaniumText style={styles.modalTitle}>
                              Click on image to select / unselect
                            </OxaniumText>
                            <TouchableOpacity
                              onPress={() => setShowModalSelectSkin(false)}>
                              <Image source={icClose} style={styles.icClose} />
                            </TouchableOpacity>
                          </View>
                          <ScrollView style={styles.modalContent}>
                            <View style={styles.subModalContent}>
                              {configSkin.map(item => (
                                <View
                                  style={styles.itemImageCheck}
                                  key={item.id}>
                                  <Image
                                    style={styles.imageCheck}
                                    source={{
                                      uri: toImageUri(item.imageSmallAvatar),
                                    }}
                                  />
                                  <View
                                    style={[styles.info, styles.flexCenter]}>
                                    <OxaniumText style={styles.nameImageCheck}>
                                      Benjamin
                                    </OxaniumText>
                                  </View>
                                  <CheckBox
                                    style={styles.btnCheckboxImage}
                                    value={values.skins.some(
                                      skin => skin.id === item.id,
                                    )}
                                    tintColors={{
                                      true: '#795CF5',
                                      false: '#795CF5',
                                    }}
                                    onValueChange={checked => {
                                      if (checked) {
                                        push(item);
                                      } else {
                                        const index = values.skins.findIndex(
                                          skin => skin.id === item.id,
                                        );
                                        remove(index);
                                      }
                                    }}
                                  />
                                </View>
                              ))}
                            </View>
                          </ScrollView>
                        </View>
                      </Modal>
                    </View>
                  )}
                </FieldArray>
              </>
            )}
          </Formik>
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ModalFilter;
