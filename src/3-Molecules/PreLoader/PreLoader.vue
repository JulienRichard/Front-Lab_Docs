<template lang="html">
  <transition name="preloaderscreen">
    <div v-if="!isLoaded" class="preloader-screen">
      <div class="preloader-screen--content">
        <svg id="preLoader-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        	 viewBox="0 0 191.7 151.7" style="enable-background:new 0 0 191.7 151.7;" xml:space="preserve">
          <g>
          	<path class="st0" d="M137.6,148H54.7c-6.4,0-12.4-3.4-15.7-8.9c-3.3-5.5-3.4-12.4-0.4-18l31.5-58.2V28.7c0-5.3,4.4-9.6,9.7-9.6
          		h32.6c5.4,0,9.8,4.3,9.8,9.6v34.2l31.4,58.2c3,5.6,2.9,12.5-0.4,18C150,144.6,144,148,137.6,148z M79.9,26.5c-1.3,0-2.3,1-2.3,2.2
          		v36.1l-32.4,59.8c-1.8,3.3-1.7,7.4,0.2,10.7c1.9,3.3,5.5,5.3,9.3,5.3h82.9c3.8,0,7.4-2,9.3-5.3c2-3.3,2-7.4,0.2-10.7l0,0
          		l-32.3-59.8V28.7c0-1.2-1.1-2.2-2.4-2.2H79.9z"/>
          	<path class="st1" d="M79.9,26.5c-1.3,0-2.3,1-2.3,2.2v36.1l-32.4,59.8c-1.8,3.3-1.7,7.4,0.2,10.7c1.9,3.3,5.5,5.3,9.3,5.3h82.9
          		c3.8,0,7.4-2,9.3-5.3c2-3.3,2-7.4,0.2-10.7l0,0l-32.3-59.8V28.7c0-1.2-1.1-2.2-2.4-2.2H79.9z"/>
          	<path class="st0" d="M137,130.1c-1.1,1.9-3.2,3.1-5.4,3.1H60.4c-2.2,0-4.3-1.1-5.4-3.1c-1.1-1.9-1.2-4.3-0.1-6.2l8.6-15.4
          		c1.2-2.2,3.6-3.5,6.1-3.2c11.4,1.1,24.1,10.8,35.5,10.4c6.1-0.2,11.8-2.5,17.2-5.4c3.1-1.7,6.9-0.6,8.6,2.5l6.2,11.2
          		C138.1,125.8,138.1,128.2,137,130.1z"/>
          	<g>
          		<path class="st2" d="M142.4,100.2l17.4,9.1c0,0,0.1,0,0.1,0c26.2,14.5,30.3,20.1,28.6,24.8c-1,2.7-3.7,3.8-7.6,3.8
          			c-2.8,0-6.2-0.5-10.1-1.3c-0.1,0-0.1,0-0.2,0C94.3,117,32.9,77,32.3,76.6c0,0-0.1,0-0.1-0.1C24.3,71.1,19.6,66.5,21.8,62
          			c2.2-4.5,9.1-5.3,37.6,3.7l7.9,2.6l-3.6,6.6l-6.6-2.2c-14.9-4.7-22.5-6.1-26.2-6.5c1.2,1,2.9,2.5,5.5,4.3
          			c1.9,1.3,61.7,39.8,135.8,58.8c3.1,0.6,5.3,0.9,6.9,1.1c-2.9-2.5-9.1-7-22.8-14.6l-7.6-4L142.4,100.2z"/>
          	</g>
          	<g>
          		<path class="st3" d="M50,100.2l-17.4,9.1c0,0-0.1,0-0.1,0C6.4,123.9,2.3,129.5,4,134.1c1,2.7,3.7,3.8,7.6,3.8
          			c2.8,0,6.2-0.5,10.1-1.3c0.1,0,0.1,0,0.2,0C98.1,117,159.5,77.1,160.1,76.7c0,0,0.1,0,0.1-0.1c7.9-5.5,12.6-10.1,10.4-14.6
          			c-2.2-4.5-9.1-5.3-37.6,3.7l-7.9,2.6l3.6,6.6l6.6-2.2c14.9-4.7,22.5-6.1,26.2-6.5c-1.2,1-2.9,2.5-5.5,4.3
          			c-1.9,1.3-61.7,39.8-135.8,58.8c-3.1,0.6-5.3,0.9-6.9,1.1c2.9-2.5,9.1-7,22.8-14.6l7.6-4L50,100.2z"/>
          	</g>
          	<g>
          		<g>
          			<path class="st2" d="M101.4,48.9c-3.9,0-7.1,3.2-7.1,7.2s3.2,7.2,7.1,7.2c3.9,0,7.1-3.2,7.1-7.2S105.3,48.9,101.4,48.9z"/>
          		</g>
          	</g>
          	<g>
          		<g>
          			<path class="st3" d="M105.8,3.9c-2.9,0-5.3,2.4-5.3,5.4s2.4,5.4,5.3,5.4c2.9,0,5.3-2.4,5.3-5.4S108.8,3.9,105.8,3.9z"/>
          		</g>
          	</g>
          	<g>
          		<g>
          			<path class="st3" d="M85.3,67.6c-4.6,1.4-7.2,6.3-5.8,10.9c1.4,4.7,6.2,7.4,10.8,6c4.6-1.4,7.2-6.3,5.8-10.9
          				C94.7,69,89.8,66.3,85.3,67.6z"/>
          		</g>
          	</g>
          	<g>
          		<g>
          			<path class="st0" d="M92,12.6c-5.8,0-10.5,4.8-10.5,10.6c0,5.9,4.7,10.6,10.5,10.6c5.8,0,10.5-4.8,10.5-10.6
          				C102.5,17.4,97.8,12.6,92,12.6z"/>
          		</g>
          	</g>
          	<g>
          		<g>
          			<path class="st0" d="M108.2,77.1c-3,0.9-4.6,4-3.8,7c0.9,3,4,4.7,7,3.9c3-0.9,4.6-4,3.8-7C114.3,78,111.1,76.3,108.2,77.1z"/>
          		</g>
          	</g>
          </g>
        </svg>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      isLoaded: false
    }
  },
  mounted () {
    this.EventHolder.$on('startPreLoading', () => {
      this.isLoaded = false
    })

    this.EventHolder.$on('stopPreLoading', () => {
      this.isLoaded = true
    })
  }
}
</script>

<style lang="scss" scoped>
// -- LOADER SCREEN
.preloader-screen {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999999999999;
  background: linear-gradient(135deg, #16336e 0%, #632882 100%);
}

.preloader-screen--content {
  position: absolute;
  @include center(xy);
  width: 30%;
  text-align: center;
}

.preloaderscreen-leave-active {
  animation: loaderscreen 1s ease-in-out;
}

@keyframes loaderscreen {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

// -- PRE-LOADER LOGO
#preLoader-logo {
  max-width: 300px;
  height: auto;
  margin-bottom: rhythm(1);
}

.st0 {
  fill:#5872BA;
}
.st1 {
  fill:#FFFFFF;
}
.st2 {
  fill:#F99820;
}
.st3 {
  fill:#EC5D50;
}
</style>
