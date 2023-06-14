function UserCard({ user }) {

    return (
      <ImageBackground 
      style={styles.userCard}
      source={{ uri: user.coverImage }}
    >
        <View style={styles.overlay}/>
        <Image 
          src={user.avatar}
          style={styles.userImage}
        />
        <View>
          <Text 
            style={{ 
              color: "white", 
              fontSize: 22, 
              fontWeight: '500',
              marginBottom: 5, 
            }}
            >{user.name}</Text>
          <Text style={{ color: "white" }}>@{user.handle}</Text>
        </View>
      </ImageBackground>
    )
  }