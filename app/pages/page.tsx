import {SparklesPreview} from "../../components/Previews/SparklesPreview";
import {PlaceholdersAndVanishInputDemo} from "../../components/Previews/PlaceholderPreview";
import {SpotlightPreview} from "../../components/Previews/SpotlightPreview";
import {CardHoverEffectDemo} from "../../components/Previews/CardHoverPreview"
import FooterPreview from "../../components/Previews/FooterPreview"
import {FloatingNavDemo} from "../../components/Previews/NavbarPreview"
export default function Page() {
  return (
    <div>
      <FloatingNavDemo/>
        <SparklesPreview /> 
        <SpotlightPreview/>
        <CardHoverEffectDemo/>
        <PlaceholdersAndVanishInputDemo/>
        <FooterPreview/>
        </div>
  );
}

