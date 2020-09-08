<View style={styles.Top}>
<View style={{ width: '94%', marginLeft: '3%', flexDirection: "row", justifyContent: 'space-between', marginTop:'5%' }}>
  <AntDesign name={'left'} size={25} color='#000000' onPress={() => {
    this.props.navigation.goBack()
  }} />
  <Text style={{ fontSize: 20, color: '#000000',position:"absolute",width:'100%',textAlign:"center" }}>选择城市</Text>
  <View style={{backgroundColor: "#6C9575", borderRadius: 15,justifyContent:'center',paddingHorizontal:10,alignItems:'flex-start'}}>
  <Text style={{ fontSize: 12, color: '#fff', backgroundColor: "#6C9575", borderRadius: 15, justifyContent:'center',alignItems:'center' }}
    onPress={() => {
      this.props.navigation.navigate("improveInformation")
    }}
  >下一步</Text>
  <View style={{flexDirection:'row'}}>
      <View style={{height:2,width:10,backgroundColor:'#FAAF3D',}}/>
      <View style={{height:2,width:10,backgroundColor:'#FAAF3D',marginLeft:2}}/>
      </View>
      </View>
</View>
</View>
Top: {
  height: 78,
  backgroundColor: '#FFFFFF',
  justifyContent: 'flex-start',
  alignItems: 'center',
  // justifyContent:"space-between",
  justifyContent: "space-between",
  flexDirection: 'row',
  elevation: 10,
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  width: '100%',
  backgroundColor: "#fff"
},



<View style={[styles.top]}>
<View style={[styles.nav_container]}>
    <View style={{ flexDirection: "row", }}>
        <AntDesign name={'left'} size={25} color={'#000'} onPress={() => {
            this.props.navigation.goBack();
        }} />
    </View>
    <Text style={{ color: "#000", fontSize: 20,position:"absolute",width:'100%',textAlign:"center"}}>打卡全部</Text>
</View>
</View>
 nav_container: {
  flex: 0.7,
  marginTop: '5%',
  flexDirection: "row",
  width: "94%",
  marginLeft:'3%',
  justifyContent: "space-between",
  alignItems: "center",
},
top: {
  height: 78,
  width: "100%",
  backgroundColor: "#fff",
  borderBottomLeftRadius: 15,
  borderBottomRightRadius: 15,
  elevation: 6,
},