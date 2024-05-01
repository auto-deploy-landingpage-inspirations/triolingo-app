import { Loader } from "lucide-react";

const Loading = () => {
  return ( 
    <div className="h-full w-full backdrop-blur-lg bg-white/90 flex items-center justify-center">
      <Loader
        className="h-12 w-12 text-muted-foreground animate-spin"
      />
    </div>
  );
}
 
export default Loading;