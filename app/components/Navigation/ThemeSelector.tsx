import { useContext } from "react";
import { ThemeContext } from "../Providers/ThemeProvider";

export default function ThemeSelector() {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleThemeChange = (newTheme: string) => {
    if (setTheme) {
      setTheme({ ...theme, secondary: newTheme });
    }
  };

  return (
    <div className="mb-10">
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("cookiesAndCream")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("wine")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("oldMoney")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("moss")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("grape")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("moon")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("joker")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("honeycomb")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("mint")}
      />
      <button
        className="bg-red-500 h-4 w-4 rounded-full"
        onClick={() => handleThemeChange("default")}
      />
    </div>
  );
}
