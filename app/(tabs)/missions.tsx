import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { MapPin, Clock, ArrowRight } from 'lucide-react-native';

const mockMissions = [
  {
    id: '1',
    title: 'Food for 4',
    pickupLocation: 'Anna\'s Cafe, Saket',
    deliveryLocation: 'Underneath Lajpat Nagar Flyover',
    pickupTime: '2:00 PM',
    deliveryTime: '3:00 PM',
    type: 'food',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Clothing Bundle',
    pickupLocation: 'Community Center, CP',
    deliveryLocation: 'Near Jama Masjid',
    pickupTime: '4:00 PM',
    deliveryTime: '5:00 PM',
    type: 'clothing',
    priority: 'medium',
  },
];

export default function MissionsScreen() {
  const MissionCard = ({ mission }) => {
    const getPriorityColor = (priority) => {
      switch (priority) {
        case 'high':
          return '#FF6B35';
        case 'medium':
          return '#FFB800';
        default:
          return '#2ECC71';
      }
    };

    return (
      <TouchableOpacity style={styles.missionCard}>
        <View style={styles.cardHeader}>
          <View style={styles.titleContainer}>
            <Text style={styles.missionTitle}>{mission.title}</Text>
            <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(mission.priority) }]}>
              <Text style={styles.priorityText}>{mission.priority.toUpperCase()}</Text>
            </View>
          </View>
        </View>

        <View style={styles.locationContainer}>
          <View style={styles.locationRow}>
            <MapPin size={16} color="#2ECC71" />
            <Text style={styles.locationLabel}>Pickup:</Text>
            <Text style={styles.locationText}>{mission.pickupLocation}</Text>
          </View>
          <View style={styles.locationRow}>
            <MapPin size={16} color="#FF6B35" />
            <Text style={styles.locationLabel}>Delivery:</Text>
            <Text style={styles.locationText}>{mission.deliveryLocation}</Text>
          </View>
        </View>

        <View style={styles.timeContainer}>
          <View style={styles.timeRow}>
            <Clock size={16} color="#666" />
            <Text style={styles.timeText}>{mission.pickupTime} - {mission.deliveryTime}</Text>
          </View>
        </View>

        <View style={styles.mapContainer}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/335321/pexels-photo-335321.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop' }}
            style={styles.mapImage}
          />
        </View>

        <View style={styles.cardFooter}>
          <Text style={styles.viewDetailsText}>View Details</Text>
          <ArrowRight size={16} color="#4A90E2" />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Available Missions</Text>
        <Text style={styles.headerSubtitle}>Choose a mission to help your community</Text>
      </View>

      <FlatList
        data={mockMissions}
        renderItem={({ item }) => <MissionCard mission={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
  },
  listContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  missionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  cardHeader: {
    marginBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  missionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1A1A1A',
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  priorityText: {
    fontSize: 10,
    fontFamily: 'Inter-SemiBold',
    color: '#FFFFFF',
  },
  locationContainer: {
    marginBottom: 12,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginLeft: 8,
    marginRight: 8,
  },
  locationText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#1A1A1A',
    flex: 1,
  },
  timeContainer: {
    marginBottom: 16,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    marginLeft: 8,
  },
  mapContainer: {
    marginBottom: 16,
  },
  mapImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewDetailsText: {
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
    color: '#4A90E2',
  },
});