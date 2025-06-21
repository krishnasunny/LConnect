"use client"

import { useState } from "react"
import { Search, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"

export function LawyersFilter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [experienceRange, setExperienceRange] = useState([0])

  return (
    <div className="sticky top-20 z-30 bg-white border-b border-gray-200 shadow-sm py-4 px-6 mb-8 rounded-md">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Search Input */}
        <div className="relative w-full md:w-2/5">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="text"
            placeholder="Search by name, location, or specialty..."
            className="pl-10 py-6 rounded-md border-gray-300 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap md:flex-nowrap gap-3 w-full md:w-3/5">
          {/* Specialty Filter */}
          <Select>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="family">Family Law</SelectItem>
              <SelectItem value="criminal">Criminal Law</SelectItem>
              <SelectItem value="corporate">Corporate Law</SelectItem>
              <SelectItem value="property">Property Law</SelectItem>
              <SelectItem value="divorce">Divorce</SelectItem>
            </SelectContent>
          </Select>

          {/* Location Filter */}
          <Select>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="kolkata">Kolkata</SelectItem>
            </SelectContent>
          </Select>

          {/* Experience Filter */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-full md:w-auto">
                Experience <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4 p-2">
                <h4 className="font-medium">Years of Experience</h4>
                <Slider defaultValue={[0]} max={25} step={1} onValueChange={setExperienceRange} />
                <div className="flex justify-between">
                  <span>{experienceRange[0]}+ years</span>
                  <span>25+ years</span>
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Sort Options */}
          <Select>
            <SelectTrigger className="w-full md:w-auto">
              <SelectValue placeholder="Sort By" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="relevance">Relevance</SelectItem>
              <SelectItem value="rating">Rating (High to Low)</SelectItem>
              <SelectItem value="experience">Experience (High to Low)</SelectItem>
              <SelectItem value="name">Name (A-Z)</SelectItem>
            </SelectContent>
          </Select>

          {/* Apply Button */}
          <Button className="bg-[#75B59C] hover:bg-[#5a9a81] text-white w-full md:w-auto">Apply Filters</Button>
        </div>
      </div>
    </div>
  )
}

