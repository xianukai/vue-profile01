<template>
  <div id="sideNav">
    <div
      :class="{'is-active': isActive}"
      class="btn-humburger"
      @click="toggleButton"    
    >
      <div></div>
      <div></div>
    </div>
    <nav 
      id="nav" 
    >
      <ul>
        <li @click="toggleButton">
          <router-link 
            to="/"
          >Top</router-link>
        </li>
        <li @click="toggleButton">
          <router-link to="/about">About</router-link>
        </li>
        <li @click="toggleButton">
          <router-link to="/portfolio2">Portfolio</router-link>
        </li>
        <li @click="toggleButton">
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
    <div 
      class="navBg"
      @click="toggleButton"
    ></div>
  </div>
  
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      isActive: false,
      isActive01: false,
    };
  },
  methods: {
    toggleButton() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
#sideNav {
  h3 {
    margin: 40px 0 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
}

a {
  color: #141615;
  // color: $main-color;
}
#nav {
  width: 800px;
  margin: 0 auto 80px;
  background-image: linear-gradient(90deg,silver,#000 50%,silver);
  border-bottom-left-radius: 40%;
  border-bottom-right-radius: 40%;
  border: 1px solid #fff;
  overflow: hidden;

  ul {
    display: flex;

    li {
      width: 100%;
      border-bottom-right-radius: 40%;

      &:first-child {
        a {
          border-bottom-left-radius: 40%;
        }
      }
      &:last-child {
        a {
          border-bottom-right-radius: 40%;
          border-right: none;
        }
      }
    }
  }

  a {
    font-weight: bold;
    // color: #2c3e50;
    font-size: 2rem;
    display: block;
    padding: 30px 0 45px;
    text-shadow: 0 0 5px #000;
    color: #17a2b8;
    border-right: 1px solid #fff;

    &.router-link-exact-active {
      color: #42b983;
    }

    &:hover {
      background-color: green;
      opacity: 0.7;
      transition: all 0.4s;
    }
  }
}

@media screen and (max-width: 767px) {
  #nav {
    width: 70%;
    height: 100vh;
    // background-color: #2c3e50;
    background-image: radial-gradient(circle, #17a2b8 0, #000 100%);
    transform: translate(-200%, 0);
    transition: all 0.4s;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    border-radius: 0;
    border: none;

    ul {
      li {
        &:first-child {
          a {
            border-bottom-left-radius: 0;
          }
        }
        &:last-child {
          a {
            border-bottom-right-radius: 0;
          }
        }
      }
    }

    a {
      color: #fff;
      padding: 30px 0;
      border-right: none;
    }
  }

  #about {
    margin-top: 80px;
  }

  .is-active ~ #nav {
    transform: translate(0, 0);
  }
  .is-active ~ .navBg {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    display: block;
    z-index: 2;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  // ハンバーガー
.btn-humburger {
  width: 56px;
  height: 56px;
  background: transparent;
  // position: relative;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }
}

  .btn-humburger > div {
    position: absolute;
    width: 56px;
    height: 3px;
    transition: all 0.2s;
    background-color: #fff;
  }

  .btn-humburger > div:first-child {
    top: 15px;
    left: 10px;
  }

  .btn-humburger > div:last-child {
    bottom: 15px;
    left: 10px;
  }

  .btn-humburger.is-active > div:first-child {
    transform: translateY(11px) rotate(45deg);
    left: 0px;
  }
  .btn-humburger.is-active > div:last-child {
    transform: translateY(-10px) rotate(-45deg);
    left: 0px;
  }
}
</style>
