import React from 'react';
import {AutoCompleteInput} from '@/components/AutoCompleteInput'; // Adjust the path as needed

const suggestions = [
    "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Icaco", "Jackfruit",
    "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato",
    "Ugli Fruit", "Vanilla Bean", "Watermelon", "Xigua", "Yellow Watermelon", "Zucchini", "Apricot", "Blueberry",
    "Cranberry", "Dragon Fruit", "Eggplant", "Feijoa", "Guava", "Huckleberry", "Indian Plum", "Jujube", "Kumquat",
    "Lime", "Mulberry", "Nance", "Olive", "Peach", "Quararibea cordata", "Rambutan", "Salak", "Tamarillo", "Uva Ursi",
    "Velvet Apple", "Wolfberry", "Ximenia caffra fruit", "Yamamomo", "Ziziphus mauritiana", "Acerola", "Breadfruit",
    "Clementine", "Durian"
  ];

const App = () => {
  return (
    <div>
      <h1>Autocomplete Input Example</h1>
      <AutoCompleteInput suggestions={suggestions} />
    </div>
  );
};

export default App;
