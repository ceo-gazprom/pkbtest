<!-- Шаблон SPA приложения -->
<template>
    <div id="app" class="p-4">
        <div class="container">
            <!-- Навигация -->
            <nav class="nav nav-pills nav-justified mb-4">
                <router-link to="/" class="nav-item nav-link">Overview</router-link>
                <router-link to="/persons" class="nav-item nav-link">Persons</router-link>
                <router-link to="/debts" class="nav-item nav-link">Debts</router-link>
                <router-link to="/portfolio" class="nav-item nav-link">Portfolio</router-link>
                <router-link to="/payment" class="nav-item nav-link">Payment</router-link>
            </nav>

            <!-- Контент -->
            <router-view class="p-4"></router-view>
        </div>
    </div>
</template>