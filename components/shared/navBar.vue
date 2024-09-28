<template>
    <nav class="bg-[#f3efe3]">
        <div class="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4">
            <a class="flex items-center text-[#f28545] space-x-3"><span class="self-center text-3xl cursor-pointer font-semibold whitespace-nowrap">Book Store</span></a>
            <div class="flex md:order-2 space-x-3 md:space-x-0">
                <button v-if="!havToken" @click="$router.push('../../../Auth/logIn')" class="hover:bg-[#f28545] hover:text-[#f3efe3] border hover:border-[#f28545] rounded-full border-black text-center px-4 py-2">Login</button>
                <div v-else class="flex items-center md:order-2 space-x-3 md:space-x-0 ">
                    <button class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                        <span class="sr-only">Open user menu</span>
                        <div class="relative w-8 h-8 overflow-hidden bg-gray-100 rounded-full">
                            <svg class="absolute w-10 h-10 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </button>
                    <div class="z-50 hidden my-4 text-base list-none divide-y divide-gray-300 rounded-lg shadow " id="user-dropdown">
                        <div class="px-4 py-3">
                        <span class="block text-sm text-gray-800">User name</span>
                        <span class="block text-sm text-gray-500 truncate">userEmail@gamil.com</span>
                        </div>
                        <ul class="py-2" aria-labelledby="user-menu-button">
                            <li v-for="item in userPages" :key="item.id">
                                <a @click="$router.push(`${item.Route}`)" class="block py-1 text-sm px-4 rounded hover:text-gray-800 md:bg-transparent" aria-current="page">{{ item.name }}</a>
                            </li>
                            <li class="py-1">
                                <a @click="logOut()" class="block px-4 py-2 text-sm border-t-2 border-b-gray-300 hover:text-gray-800">Sign out</a>
                            </li>
                        </ul>
                    </div>  
                </div>
                <button data-collapse-toggle="navbar-cta" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-800 hover:text-[#f3efe3] focus:outline-none focus:ring-2" aria-controls="navbar-cta" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>   
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 text-xl cursor-pointer rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 ">
                    <li v-for="item in items" :key="item.id">
                        <a @click="$router.push(`${item.Route}`)" :class="{'text-gray-800':useRoute().path===item.Route}" class="block py-2 px-3 md:p-0 rounded hover:text-[#f28545] md:bg-transparent" aria-current="page">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup lang="ts">
const items=[
    {"id":1,name:"Home",Route:"/"},
    {"id":2,name:"Books",Route:"/Books"},
    {"id":3,name:"Forums",Route:"/Forums"},
    {"id":4,name:"Authors",Route:"/Authors"}
]
const userPages=[
    {"id":1,name:"Profile",Route:"/user/Profile"},
    {"id":2,name:"Favorites",Route:"/user/Favorites"},
    {"id":3,name:"Save Text",Route:"/user/saveText"},
    {"id":4,name:"Chat",Route:"/user/Chat"},
    {"id":5,name:"Notifications",Route:"/user/Notifications"},
    {"id":5,name:"Reading Log"}
]
onMounted(() => {
  const havToken = window.localStorage.getItem("token");
});
const logOut=()=> {
    localStorage.removeItem("token");
}
</script>
<style scoped>
</style>
