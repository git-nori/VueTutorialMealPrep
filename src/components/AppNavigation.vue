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
                <template v-for="(item, index) in items">
                    <v-list-title :key="index">
                        <v-list-title-content>{{ item.title }}</v-list-title-content>
                        <v-divider :key="`divider-${index}`"></v-divider>
                    </v-list-title>
                </template>
            </v-list>
        </v-navigation-drawer>
        <!-- appに応じて動的にサイズを変更するようappを追加 -->
        <v-app-bar app color="brown darken-4" dark>
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-toolbar-title class="hidden-sm-and-down">{{ appTitle }}</v-toolbar-title>
            <v-btn flat color="brown darken-3">Menu</v-btn>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <v-btn flat color="brown darken-3" class="hidden-sm-and-down">Sign in</v-btn>
            <v-btn color="brown lighten-3" class="hidden-sm-and-down">JOIN</v-btn>
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
            items: [{ title: 'Menu' }, { title: 'Sign in' }, { title: 'Join' }]
        };
    }
};
</script>

<style scoped>
</style>