import { ref } from "vue";
export default function useComp() {
  const compoTitle = "Composition";
  const compData = ref("Composition Data");
  const compMethod = () => {
    console.log("Hello from Composition");
  };
  return { compoTitle, compData, compMethod };
}
