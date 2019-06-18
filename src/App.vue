<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
            |
            <router-link to="/complianceRate">complianceRate</router-link>
            |
            <router-link to="/guageRate">GuageRate</router-link>
            |
            <router-link to="/buttonBrackets">buttonBrackets</router-link>
            |
            <router-link to="/uploadImageView">uploadImageView</router-link>
            |
            <router-link to="/treeCom">TreeCom</router-link>
            |
            <router-link to="/lineChart">LineChart</router-link>
        </div>
        <router-view/>
    </div>
</template>

<style>
    @font-face {
        font-family: "NumberFont";
        src: url("http://cdn.itepia.com/EuropeExt.otf") format("truetype");
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;
    }

    #nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    #nav a.router-link-exact-active {
        color: #42b983;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    div {
        scrollbar-face-color: #65879c; /*主色调*/
        scrollbar-highlight-color: rgba(49, 154, 184, 1);
        scrollbar-shadow-color: rgba(49, 154, 184, 1); /*描边颜色*/
        scrollbar-3dlight-color: rgba(49, 154, 184, 1); /*左侧边高光颜色*/
        scrollbar-arrow-color: rgba(49, 154, 184, 1); /*小三角颜色*/
        scrollbar-track-color: rgba(49, 154, 184, 1);
        scrollbar-darkshadow-color: rgba(49, 154, 184, 1);
    }

    /*\Chrome*/
    ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 8px 8px 8px #40505a;
        border-radius: 3px;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 3px;
        box-shadow: inset 8px 8px 8px rgba(49, 154, 184, 0.5);
    }
</style>
