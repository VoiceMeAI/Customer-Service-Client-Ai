import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { InfoIcon, Search, StarIcon } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="font text-4xl">Font Defualt - DM Sans : CSA Portal</h1>
      <h1 className="font-eb-garamond text-4xl">Font EB Garamond : CSA Portal</h1>
      <h1 className="font-ibm-plex-mono text-4xl">
        Font IBM Plex Mono : CSA Portal
      </h1>

      <div className="space-y-0 p-8">
        <Button>Click me</Button>

        <div className="mx-auto mt-8 max-w-lg space-y-3">
          <Input placeholder="hi" />

          <InputGroup className="w-fit">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>

          <InputGroup className="w-fit">
            <InputGroupInput placeholder="Card number" />
            <InputGroupAddon align="inline-end">
              <StarIcon />
              <InfoIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div>
    </div>
  );
}
