<template>
<div>
  <form id="search">
  	<div>
  		Search <input name="query" v-model="searchQuery">
  	</div>
  	<div>
  		<p class="p" v-if="labImage">Current experiment image： {{ labImage }}</p>
  	</div>
  </form>
  <router-view
  	v-on:newimage="refresh"
    :data="gridData"
    :columns="gridColumns"
    :filterKey="searchQuery">
  </router-view>
</div>
</template>
<script>
import { getLabImage }  from '../../lib/vueHelper'
import store from '@/vuex/store'
import Promise from 'promise-polyfill'
import "regenerator-runtime/runtime"
export default {
	name:"admin",
	componets: 'grid',
	data: function() {
		
		// async function getimage () {
		// 	try{
		// 		await getImage(this)
		// 	}catch(err) {
		// 		console.log(err)
		// 	}
		// }
		// getimage().then(()=>{
		// 	this.labImage=this.$store.state.labImage
		// 	console.log("fhjasd"+this.labImage)
		// })

		return {
			labImage: store.state.labImage,
		    searchQuery: '',
		    gridColumns: ['Name', 'Id'],
		    gridData: [
		      { Name: 'stress-bigger2', Id: '16bc3d6ac524' },
		      { Name: 'stress-bigger1', Id: '99dac81d63c2' },
		      { Name: 'stress-bigger', Id: 'a1849a42a346' },
		      { Name: 'rethinkdb', Id: '47a81cdb853b' },
		      { Name: 'quay.io/coreos/etcd', Id: '0e97d348c238' },
		      { Name: 'shipyard/shipyard', Id: '36fb3dc0907d' },
		      { Name: 'alpine', Id: 'ee4603260daa' },
		      { Name: 'redis', Id: '50e38ce0458f' },
		      { Name: 'python', Id: '6b494b5f019c' },
		      { Name: 'swarm', Id: '942fd5fd357e' },
		      { Name: 'ubuntu', Id: 'e17b56e5200a' },
		      { Name: 'registry', Id: '56cfd79a53f5' },
		    ]
		}
	},
	created: function() {
		console.log("in created")
		async function getimage () {
			try{
				await getLabImage(this)
			}catch(err) {
				console.log(err)
			}
		}
		getimage().then(()=>{
			this.labImage=store.state.labImage
		})
	},
	mounted: function() {

  	},
	methods: {
		refresh: function(){
			console.log("refresh")
			console.log(store.state.labImage)
			this.labImage=store.state.labImage
		}
		// switchTab: function() {
		// 	this.$emit('switch');
		// },
		// setCurrentImage: function(imagename) {
		// 	console.log(imagename)
		// 	this.currentImage = imagename
		// }
	}
}

</script>
<style>

</style>
