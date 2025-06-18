package models

import "gorm.io/gorm"

type Favourite struct {
	gorm.Model
	UserID          uint
	User            User `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	AdvertisementID uint
	Advertisement   Advertisement `gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
}
