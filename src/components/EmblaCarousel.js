import React, { useState, useEffect, useCallback } from 'react'
import { PrevButton, NextButton } from './EmblaCarouselButtons'
import { useEmblaCarousel } from 'embla-carousel/react'
import { mediaByIndex } from './media'
import './Carousel.css'

const EmblaCarousel = ({ slides }) => {
  const [EmblaCarouselReact, embla] = useEmblaCarousel({
    containScroll: 'trimSnaps',
    dragFree: true
  })
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla])

  const onScroll = useCallback(() => {
    if (!embla) return
    const progress = Math.max(0, Math.min(1, embla.scrollProgress()))
    setScrollProgress(progress * 100)
  }, [embla, setScrollProgress])

  useEffect(() => {
    if (!embla) return
    onSelect()
    onScroll()
    embla.on('select', onSelect)
    embla.on('scroll', onScroll)
  }, [embla, onSelect, onScroll])

  return (
    <>
      <div className="embla">
        <EmblaCarouselReact className="embla__viewport">
          <div className="embla__container">
            {slides.map(index => (
              <div className="embla__slide" key={index}>
                <div className="embla__slide__inner">
                  <img
                    className="embla__slide__img"
                    src={mediaByIndex(index)}
                    alt="A cool cat."
                  />
                </div>
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="embla__progress">
        <div
          className="embla__progress__bar"
          style={{ transform: `translateX(${scrollProgress}%)` }}
        />
      </div>
    </>
  )
}

export default EmblaCarousel
