import {tw} from "twind"

const darkModeClasses = (): void => {
  document.body.classList.add(
    tw`dark:bg-gray-900`,
    tw`bg-white`,
    tw`dark:text-white`,
    tw`text-gray-900`
  );
}

const heightClasses = () => {
  const classes = tw`h-full`;
  document.documentElement.classList.add(classes);
  document.body.classList.add(classes);
  document.getElementById("__next")?.classList.add(classes);
}

export {darkModeClasses, heightClasses}