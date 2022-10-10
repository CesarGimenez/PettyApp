import { Dimensions } from 'react-native'

export default {
  cardContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  coverContainer: {
    position: 'relative',
  },
  coverImage: {
    height: Dimensions.get('window').width * (3 / 4),
    width: Dimensions.get('window').width,
  },
  headerContainer: {
    alignItems: 'center',
    backgroundColor: '#F9F8FD',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },
  scroll: {
    backgroundColor: '#F9F8FD',
    flex: 1,
    marginBottom: 55,
  },
  productRow: {
    margin: 5,
  },
  mainViewStyle: {
    flex: 1,
    flexDirection: 'column',
    flexGrow: 1,
  },
  coverMetaContainer: {
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },

  buttonFooter1: {
    position: "absolute",
    top: -80,
    right: 80,
    zIndex: 10,
    padding: 10,
    backgroundColor: '#9B8ACA',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,

  },
  buttonFooter2: {
    position: "absolute",
    top: -80,
    right: 280,
    zIndex: 10,
    padding: 10,
    backgroundColor: '#F9F8FD',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth:3,
    borderColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  navigatorButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F4F2F9',
    backgroundColor: '#F9F8FD',
    borderRadius: 10,
    padding: 4,
    marginTop: 20,
    marginBottom: 12,
    marginLeft: 20,
    marginRight: 20,
    height: 70,
  },
  navigatorTextTittle: {
    alignItems: 'flex-start',
    color: "#3C3C43",
    fontSize: 15,
    justifyContent: 'center',
    flex:1
  },
  navigatorTextSubTittle: {
    alignItems: 'flex-start',
    color: "#3C3C43",
    fontSize: 13,
    justifyContent: 'center',
    fontWeight: 'bold',
    flex:1
  },
  borderCenter: {
    borderColor: '#FFA890',
    borderWidth: 0.5,
    height: 55,
  },
  textFooter: {
    alignItems: 'center',
    color: '#DDD6F7',
    fontWeight: 'bold',
    position: "absolute",
  },
  textFooter2: {
    alignItems: 'center',
    color: 'white',
    fontWeight: 'bold',
    position: "absolute",
  },
  priceText: {
    color: "black",
    fontSize: 36,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 5,
  },
  detailText: {
    color: "#3C3C43",
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10
  },
  detailText2: {
    color: "#3C3C43",
    fontSize: 16,
    alignItems: 'flex-end',
  },

  detailText3: {
    color: "#83838A",
    fontSize: 14,
    marginBottom: 10
  },
  subDetailText: {
    color: "#3C3C43",
    fontSize: 14,
    paddingTop: 10
  },
  descriptionText: {
    color: "gray",
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 1,
    marginBottom: 4,
  },
  healthButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#F4F2F9",
    padding: 5,
    marginTop: 25,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    height: 85,
  },
  healthTextTittle: {
    alignItems: 'flex-start',
    color: "#3C3C43",
    fontSize: 12,
    fontWeight: 'bold',
    justifyContent: 'center',
    flex:1
  },
  healthTextSubTittle: {
    alignItems: 'flex-start',
    color: "#3C3C43",
    fontSize: 13,
    justifyContent: 'center',
    fontWeight: 'bold',
    flex:1
  },
  healthIcon: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex:1,
    aspectRatio: 1, 
    resizeMode: 'contain',
  },
}