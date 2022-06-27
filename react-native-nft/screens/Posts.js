import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import axios from 'axios'


const Posts = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		async function foo() {
			try{
				const res = await axios.get('http://localhost:8000/api/posts/');
				const result = await res.json();
				console.log("new data", result);
				console.log("old data", res);
			}catch(error){
				console.log(error)
			}
		}
	}, [])
	return (
		<View>
{/*		{posts.map(post => (
			<Text key={post.id}>This is {post.title}</Text>
		))}*/}
		<Text>Hello world</Text>
		</View>
	)
}

export default Posts