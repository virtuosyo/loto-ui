import { action } from "@storybook/addon-actions";
import React from "react";
import { AutoComplete } from "./autoComplete";

export const SimpleComplete = () => {
  // const leagues = [
  //   { value: "Zed", number: 12 },
  //   { value: "Jinx", number: 23 },
  //   { value: "Thresh", number: 321 },
  //   { value: "cook", number: 213 },
  //   { value: "jobs", number: 323 },
  // ];
  // const handleFetch = (query: string) => {
  //   return leagues.filter((name) => name.includes(query));
  // };
  // const handleFetch = (query: string) => {
  //   return leagues.filter((player) => player.value.includes(query));
  // };
  const handleFetch = (query: string) => {
    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items
          .slice(0, 10)
          .map((item: { login: any }) => ({ value: item.login, ...item }));
      });
  };
  // const renderOption = (item: DataSourceType) => {
  //   return <h2>Name: {item}</h2>;
  // };

  return (
    <>
      <AutoComplete
        fetchSuggestions={handleFetch}
        onSelect={action("selected")}
        // renderOption={renderOption}
      ></AutoComplete>
    </>
  );
};
SimpleComplete.storyName = "Simple Complete";

const storySettings = {
  title: "AutoComplete component",
  component: AutoComplete,
};

export default storySettings;
