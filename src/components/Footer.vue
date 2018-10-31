<template>
    <div>
        <!--底部菜单栏--> 
      <footer id="footer">
        <mt-tabbar>
			<mt-tab-item  v-for="tbItem in tbItems" id="tbItem">
				<img slot="icon">
				<b v-text="tbItem"></b>
			</mt-tab-item>
		</mt-tabbar>
      </footer>
    </div>
</template>
<script>
      export default{
        data(){
            return{
				tbItems:["书城","频道","发现","我的"]
            }
        }
    }
</script>
<style>

</style>