<script lang="ts">
import {h, PropType, ref} from "vue";

type Direction = "up" | "down" | "left" | "right";

interface Props {
  duration?: number,
  repeat?: number,
  stopOnHover?: boolean,
  direction?: Direction,
  maxWidth?: string,
}

export default {
  name: "MarqueeText",
  props: {
    duration: {
      type: Number,
      default: 10,
    },
    repeat: {
      type: Number,
      default: 2,
      validator: (value: number) => value > 0,
    },
    stopOnHover: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String as PropType<Direction>,
      default: "left",
    },
  },
  setup: (props: Props, expose: any) => {
    const {duration, repeat, stopOnHover, direction} = props;
    const {slots} = expose;
    const paused = ref<boolean>(false);

    const MarqueeText = () => {
      return h("div", {
        class: [
          `marquee-text__wrap`,
          paused.value ? 'paused' : undefined,
        ]
      }, [
        h("div", {
          class: `marquee-text__content ${direction}`,
          onMouseover: () => {
            if (!stopOnHover) return;
            paused.value = true;
          },
          onMouseleave: () => {
            if (!stopOnHover) return;
            paused.value = false;
          }
        }, Array(repeat).fill(
            h("div", {
              class: `marquee-text__text ${direction}`,
              style: {
                animationDuration: `${duration}s`,
              }
            }, slots.default())
        ))
      ])
    }

    return MarqueeText;
  }
}
</script>

<style lang="scss" scoped>
.marquee-text {
  &__wrap {
    @apply overflow-hidden select-none;

    &.paused {
      .marquee-text__text {
        animation-play-state: paused;
      }

      .marquee-text__content {
        animation-play-state: paused;
      }
    }
  }

  &__content {
    &.left, &.right {
      width: 100000px;
    }

    &.up {
      @apply animate-up;
    }

    &.down {
      @apply animate-down;
    }
  }

  &__text {
    display: inline-block;
    will-change: transform;

    &.left {
      @apply animate-left;
    }

    &.right {
      @apply animate-right;
    }
  }
}
</style>