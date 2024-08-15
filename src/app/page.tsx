import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Youtube, Linkedin } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Aziz Alkan</h1>
      <p className="text-balance text-muted-foreground">
        Transforming ideas into successful ventures.
      </p>
      <div className="flex gap-2 mt-4">
        <Link href="https://instagram.com/azzlkn" target="_blank">
          <Button>
            <Instagram className="mr-2 h-4 w-4" /> @azzlkn
          </Button>
        </Link>
        <Link href="https://x.com/azzlkn" target="_blank">
          <Button>
            <Twitter className="mr-2 h-4 w-4" /> @azzlkn
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/azzlkn" target="_blank">
          <Button>
            <Linkedin className="mr-2 h-4 w-4" /> @azzlkn
          </Button>
        </Link>
        <Link href="https://youtube.com/@azzlkn" target="_blank">
          <Button>
            <Youtube className="mr-2 h-4 w-4" /> @azzlkn
          </Button>
        </Link>
      </div>
      <div className="mt-8 grid gap-4 w-full">
        <div className="flex items-center mx-3 gap-4 border border-muted-foreground rounded-lg p-4 ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/proses.png" alt="Avatar" />
            <AvatarFallback>PA</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Proses Ajans
            </p>
            <p className="text-sm text-muted-foreground">
              Firmaların dijitalleşerek kazançlarını arttıran dijital danışmanlık ajansı.
            </p>
          </div>
          <div className="ml-auto font-medium">
            <Link href="https://prosesajans.com" target="_blank">
              <Button>İncele</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center mx-3 gap-4 border border-muted-foreground rounded-lg p-4 ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/dada.png" alt="Avatar" />
            <AvatarFallback>DY</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Dada Yazılım
            </p>
            <p className="text-sm text-muted-foreground">
              Fikirleri 4 hafta içerisinde mobil uygulama haline getiren yazılım ajansı.
            </p>
          </div>
          <div className="ml-auto font-medium">
            <Link href="https://dadayazilim.com" target="_blank">
              <Button>İncele</Button>
            </Link>
          </div>
        </div>
        <div className="flex items-center mx-3 gap-4 border border-muted-foreground rounded-lg p-4 ">
          <Avatar className="h-9 w-9">
            <AvatarImage src="/taym.png" alt="Avatar" />
            <AvatarFallback>TS</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">
              Taym Studio
            </p>
            <p className="text-sm text-muted-foreground">
              Yeni nesil ürün ve içerik çekim stüdyosu.
            </p>
          </div>
          <div className="ml-auto font-medium">
            <Link href="https://tally.so/r/mYroOB" target="_blank">
              <Button>Form Doldur</Button>
            </Link>
          </div>
        </div>
      </div>
      <footer className="mt-8">
        <p>&copy; {new Date().getFullYear()} Aziz Alkan</p>
      </footer>
    </div>
  );
}
