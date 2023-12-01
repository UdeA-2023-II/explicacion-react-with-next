import {AutoCompleteInput} from "@/components/AutoCompleteInput";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

const suggestions = [
  "Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape", "Honeydew", "Icaco", "Jackfruit",
  "Kiwi", "Lemon", "Mango", "Nectarine", "Orange", "Papaya", "Quince", "Raspberry", "Strawberry", "Tomato",
  "Ugli Fruit", "Vanilla Bean", "Watermelon", "Xigua", "Yellow Watermelon", "Zucchini", "Apricot", "Blueberry",
  "Cranberry", "Dragon Fruit", "Eggplant", "Feijoa", "Guava", "Huckleberry", "Indian Plum", "Jujube", "Kumquat",
  "Lime", "Mulberry", "Nance", "Olive", "Peach", "Quararibea cordata", "Rambutan", "Salak", "Tamarillo", "Uva Ursi",
  "Velvet Apple", "Wolfberry", "Ximenia caffra fruit", "Yamamomo", "Ziziphus mauritiana", "Acerola", "Breadfruit",
  "Clementine", "Durian"
];


const Index = () => {
  return (
    <div className="flex flex-col w-full items-center">
      <span>
        <h1> Index Page</h1>
      </span>
      <Input name="name" label="Nombre" placeholder="Jhon Doe" />
      <Input
        name="email"
        label="Correo"
        type="email"
        placeholder="jhondoe@email.com"
      />
      <Input
        name="password"
        label="Contraseña"
        type="password"
        placeholder="password"
      />
      <Button text="Iniciar Sesión" textColor="black" backgroundColor="gray" />
      <AutoCompleteInput suggestions={suggestions} />
    </div>

  );
};
export default Index;
