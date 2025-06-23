import React from "react";

import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type SlugType = {
  originalUrl: string;
};

function App() {
  const [loading, setLoading] = React.useState<boolean>(false);
  const { register, handleSubmit, reset } = useForm<SlugType>();
  const [slug, setSlug] = React.useState<string>("");

  const handleGetSlug = async (data: SlugType) => {
    try {
      setLoading(true);
      console.log(data);
      const response = await axios.post(
        "http://localhost:3333/api/create-slug",
        data
      );

      if (response) {
        setSlug(response.data);
        reset();
      }

      if (!response) {
        toast.error("Erro ao criar URL, tente novamente.");
      }
    } catch (error) {
      console.error("Falha ao registrar.", error);
      toast.error("Falha ao registrar.");
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen mx-auto bg-gray-100">
      <div className="md:w-[50dvw] m:border-x m:border-border h-full backdrop-blur-md bg-white shadow-md items-center justify-center flex flex-col gap-4 md:gap-6 p-4 md:p-12">
        <div className="flex flex-col gap-0.5">
          <h1 className="font-bold text-xl">
            Bem-vindo(a) ao encurtador Fast.Ly!
          </h1>
          <span className="text-muted-foreground">
            Este site é gratuito, fique tranquilo.
            <br />
            Coloque sua URL no campo abaixo e clique em prosseguir, o link
            encurtado possuirá 1 dia até expirar.
          </span>
        </div>
        <form
          onSubmit={handleSubmit(handleGetSlug)}
          className="w-full flex flex-col gap-4 md:gap-6"
        >
          <div className="flex flex-col gap-2 w-full">
            <Label>
              Insira a URL original{" "}
              <span className="font-normal text-muted-foreground">
                * Destino
              </span>
            </Label>
            <Input
              type="text"
              placeholder="exemplo: www.youtube.com"
              {...register("originalUrl")}
              required
            />
          </div>
          <Button disabled={loading} type="submit" className="w-full">
            {loading === true ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Prosseguir"
            )}
          </Button>
        </form>
        {slug && (
          <div className="w-full flex flex-col gap-2 items-center">
            <Label>URL encurtada gerada:</Label>
            <div className="flex w-full gap-2">
              <Input
                type="text"
                value={`http://localhost:5173/r/${slug}`}
                readOnly
                className="flex-1"
              />
              <Button
                type="button"
                onClick={() => {
                  navigator.clipboard.writeText(
                    `http://localhost:5173/r/${slug}`
                  );
                }}
              >
                Copiar
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
