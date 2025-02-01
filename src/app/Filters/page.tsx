"use client"
import {Label} from "@/Components/FiltersPage/ui/label";
import MultipleSelector, {Option} from "@/Components/FiltersPage/ui/multiselect";
import {useId} from "react";


const shortcuts = {
    API_URL: "",
    FilterSelected:"filter_selected",
}

const ChooseWhatYouLookingFor: Option[] = [
    {
        value: "cars",
        label: "Cars",
    },
    {
        value: "Electronics",
        label: "Electronics",
    },
    {
        value: "Apartaments",
        label: "Apartaments (only for Platinum)",
        disable: true,
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
    {
        value: "angular",
        label: "Angular",
    },
    {
        value: "vue",
        label: "Vue.js",
    },
    {
        value: "react",
        label: "React",
    },
    {
        value: "ember",
        label: "Ember.js",
    },
    {
        value: "gatsby",
        label: "Gatsby",
    },
    {
        value: "eleventy",
        label: "Eleventy (only for Platinum)",
        disable: true,
    },
    {
        value: "solid",
        label: "SolidJS",
    },
    {
        value: "preact",
        label: "Preact",
    },
    {
        value: "qwik",
        label: "Qwik",
    },
    {
        value: "alpine",
        label: "Alpine.js",
    },
    {
        value: "lit",
        label: "Lit",
    },
];

export default function Filter() {
    const id = useId();

    const HandleSubmit = async () => {
        await fetch(shortcuts.API_URL+shortcuts.FilterSelected, {body:id})
    }


    return (
        <>
            <div className="pt-16">
                <form>
        <div className="space-y-2">
            <Label className=" pl-6 text-amber-50">Categories</Label>
            <MultipleSelector
                className="bg-amber-50"
                commandProps={{
                    label: "Select What Are You Looking For",
                }}
                value={ChooseWhatYouLookingFor.slice(0, 0)}
                defaultOptions={ChooseWhatYouLookingFor}
                placeholder="Select What Are You Looking For"
                hideClearAllButton
                hidePlaceholderWhenSelected
                emptyIndicator={<p className="text-center text-sm">No results found</p>}
            />
        </div>
                    <div><button type="submit" onSubmit={HandleSubmit}></button></div>
                </form>

        </div>
            </>
    );
}
