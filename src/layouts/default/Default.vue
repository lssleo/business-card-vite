<template>
    <div>
        <header>
            <Navigation />
        </header>
        <main>
            <router-view>
            </router-view>
            <slot />
        </main>
    </div>
</template>

<script>
import Navigation from '../../components/Navigation.vue';

export default {
    name: 'DefaultLayout',
    components: {
        Navigation,
    },
};
</script>

<style scoped></style>
