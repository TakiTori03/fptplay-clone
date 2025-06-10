<template>
  <div class="video-page-container">
    <div class="video-player-container">
      <!-- Video.js player will be initialized here -->
      <video
        ref="videoPlayer"
        class="video-js vjs-default-skin"
        controls
        preload="auto"
        data-setup="{}"
      >
        <source src="/path/to/your/video.mp4" type="video/mp4" />
        <!-- Add other source types if needed -->
        <p class="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to
          a web browser that
          <a href="https://videojs.com/html5-video-support/" target="_blank"
            >supports HTML5 video</a
          >
        </p>
      </video>
    </div>

    <div class="video-info-container">
      <h1>{{ videoTitle }}</h1>
      <p>{{ videoDescription }}</p>
      <!-- Add more info like actors, etc. -->
      <div class="actions">
        <span>Theo dõi</span>
        <span>Chia sẻ</span>
      </div>
    </div>

    <!-- Potentially other sections below, e.g., comments, related videos -->
  </div>
</template>

<script>
import videojs from "video.js";
import "video.js/dist/video-js.css"; // Import default Video.js styles

export default {
  data() {
    return {
      videoTitle: "Cuộc Sống Mới Trong Bóng Tối Của Trị Liệu Sư Thiên Tài",
      videoDescription: "The Brilliant Healer's New Life In The Shadows",
      player: null,
    };
  },
  mounted() {
    // Initialize Video.js player
    this.player = videojs(this.$refs.videoPlayer, {}, () => {
      console.log("player is ready");
    });
  },
  beforeUnmount() {
    // Dispose the player when the component is destroyed
    if (this.player) {
      this.player.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
/* Add your SCSS styles here */
.video-page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.video-player-container {
  width: 100%;
  max-width: 1200px; /* Adjust as needed */
  margin-bottom: 20px;
}

.video-info-container {
  width: 100%;
  max-width: 1200px; /* Match player width */

  h1 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }

  .actions {
    margin-top: 10px;

    span {
      margin-right: 15px;
      cursor: pointer; /* Indicate clickable */
    }
  }
}

/* Add more specific styles based on the image */
</style>
