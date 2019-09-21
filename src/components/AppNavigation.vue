<template>
    <!-- appに応じて動的にサイズを変更するようappを追加 -->
    <v-app-bar app color="cyan darken-4" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
        <v-btn flat color="cyan darken-3">Menu</v-btn>
        <v-spacer></v-spacer>
        <v-btn flat color="cyan darken-3">Sign in</v-btn>
        <v-btn color="cyan lighten-3">JOIN</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style scoped>
</style>