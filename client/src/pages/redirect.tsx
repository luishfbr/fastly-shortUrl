import React from "react";
import LoadingPage from "@/components/loading-page";
import axios from "axios";
import { useParams } from "react-router";
import { toast } from "sonner";

export default function Redirect() {
  const { slug } = useParams();

  React.useEffect(() => {
    const handleGetOriginalUrl = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(`http://localhost:3333/${slug}`);
        if (response) {
          let url = response.data.originalUrl;
          if (!/^https?:\/\//i.test(url)) {
            url = "https://" + url;
          }
          window.location.href = url;
        }

        if (!response) {
          toast.error("Erro ao capturar URL original, tente novamente.");
          window.location.href = "http://localhost:3000";
        }
      } catch (error) {
        console.error("Erro ao capturar URL original, tente novamente.", error);
        toast.error("Erro ao capturar URL original, tente novamente.");
      }
    };
    handleGetOriginalUrl();
  }, [slug]);

  return <LoadingPage />;
}
