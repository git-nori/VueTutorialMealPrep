<template>
    <span>
        <v-navigation-drawer
            app
            v-model="drawer"
            class="brown lighten-2"
            dark
            disable-resize-watcher
        >
            <v-list>
                <v-list-item v-for="(item, index) in items" :key="index" :to="item.title">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-divider :key="`divider-${index}`"></v-divider>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <!-- appに応じて動的にサイズを変更するようappを追加 -->
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <router-link to="/">
                <v-toolbar-title to="/">{{ appTitle }}</v-toolbar-title>
            </router-link>
            <v-btn text color="brown darken-3" to="/menu">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn text color="brown darken-3" class="hidden-sm-and-down" to="/signin">Sign in</v-btn>
                <v-btn color="brown lighten-3" class="hidden-sm-and-down" to="/join">JOIN</v-btn>
            </div>
            <div v-else>
                <v-btn text color="white" dark @click="logout">Logout</v-btn>
            </div>
        </v-app-bar>
    </span>
</template>

<script>
export default {
    name: 'AppNavigation',
    data() {
        return {
            appTitle: 'MealPrep',
            drawer: false,
            items: [{ title: 'Menu' }, { title: 'Signin' }, { title: 'Join' }]
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('userSignOut');
        }
    }
};
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.router-link-exact-active {
    color: white;
    text-decoration: none;
}
.v-toolbar__title {
    color: white;
    text-decoration: none;
}
</style>