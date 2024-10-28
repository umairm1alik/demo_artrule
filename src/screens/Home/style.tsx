import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  bannerImg: {
    width: '100%',
    borderRadius: 23,
    marginTop: 20,
  },
  columnStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  imgDescr: {
    position: 'absolute',
    backgroundColor: 'rgba(243, 247, 250, 0.7)',
    height: 54,
    borderRadius: 23,
    top: 40,
    left: 10,
    width: 166,
    padding: 10,
  },
  alignRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  descrTxt: {
    color: '#000000',
  },
  bannerBg: {
    width: '100%',
    height: 73,
    marginVertical: 10,
  },
  bannerHeading: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  shopbtn: {
    backgroundColor: '#000000',
    height: 22,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  shopTxt: {
    color: '#FFFFFF',
  },
  bottomCard: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 15,
    overflow: 'hidden',
  },
  bottomCont: {
    padding: 20,
  },
  milestoneTxt: {
    fontSize: 12,
    color: '#000000',
  },
  milestoneTxtHead: {
    fontSize: 32,
    color: '#000000',
  },
});
